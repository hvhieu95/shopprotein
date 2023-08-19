# Import các thư viện cần thiết từ FastAPI và SQLAlchemy
from fastapi import FastAPI, Path, Body, Depends
from sqlalchemy.orm import Session, sessionmaker
from starlette.requests import Request
from db import Todo, engine
from pydantic import BaseModel

# Khởi tạo ứng dụng FastAPI
app = FastAPI()

# Tạo một session factory để tạo ra các session kết nối đến cơ sở dữ liệu
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Định nghĩa model cho request body khi tạo hoặc cập nhật một Todo
class TodoIn(BaseModel):
    title: str
    done: bool

# Hàm trợ giúp để lấy một Todo từ cơ sở dữ liệu theo id
def get_todo(db_session: Session, todo_id: int):
    return db_session.query(Todo).filter(Todo.id == todo_id).first()

# Hàm trợ giúp để lấy session từ request
def get_db(request: Request):
    return request.state.db

# Endpoint để lấy danh sách tất cả Todos
@app.get("/todos/")
def read_todos(db: Session = Depends(get_db)):
    todos = db.query(Todo).all()
    return todos

# Endpoint để lấy một Todo theo id
@app.get("/todos/{todo_id}")
def read_todo(todo_id: int, db: Session = Depends(get_db)):
    todo = get_todo(db, todo_id)
    return todo

# Endpoint để tạo một Todo mới
@app.post("/todos/")
async def create_todo(todo_in: TodoIn, db: Session = Depends(get_db)):
    todo = Todo(title=todo_in.title, done=False)
    db.add(todo)
    db.commit()
    todo = get_todo(db, todo.id)
    return todo

# Endpoint để cập nhật một Todo theo id
@app.put("/todos/{todo_id}")
async def update_todo(todo_id: int, todo_in: TodoIn, db: Session = Depends(get_db)):
    todo = get_todo(db, todo_id)
    todo.title = todo_in.title
    todo.done = todo_in.done
    db.commit()
    todo = get_todo(db, todo_id)
    return todo

# Endpoint để xóa một Todo theo id
@app.delete("/todos/{todo_id}")
async def delete_todo(todo_id: int, db: Session = Depends(get_db)):
    todo = get_todo(db, todo_id)
    db.delete(todo)
    db.commit()

# Middleware để tạo và đóng session cho mỗi request
@app.middleware("http")
async def db_session_middleware(request: Request, call_next):
    request.state.db = SessionLocal()
    response = await call_next(request)
    request.state.db.close()
    return response
