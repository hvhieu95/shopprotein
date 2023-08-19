# Import các thư viện cần thiết từ SQLAlchemy
from sqlalchemy import Boolean, Column, Integer, String, create_engine
from sqlalchemy.ext.declarative import declarative_base

# Tạo một lớp cơ sở cho tất cả các model
Base = declarative_base()

# Chuỗi kết nối đến cơ sở dữ liệu PostgreSQL
# Thay 'username', 'password', 'localhost', '5432', và 'mydatabase' bằng thông tin thực tế của bạn
SQLALCHEMY_DATABASE_URI = "postgresql://postgres:160295@localhost:5432/postgres"

# Tạo một engine kết nối đến cơ sở dữ liệu
engine = create_engine(SQLALCHEMY_DATABASE_URI, echo=True)

# Định nghĩa table Todo
class Todo(Base):
    __tablename__ = 'todos'  # Tên table trong cơ sở dữ liệu
    id = Column('id', Integer, primary_key=True)  # Cột id, kiểu số nguyên, là khóa chính
    title = Column('title', String(200))  # Cột title, kiểu chuỗi, độ dài tối đa 200 ký tự
    done = Column('done', Boolean, default=False)  # Cột done, kiểu boolean, mặc định là False

# Tạo table Todo trong cơ sở dữ liệu nếu nó chưa tồn tại
Base.metadata.create_all(bind=engine)
