from sqlalchemy import create_engine, MetaData
from sqlalchemy.schema import CreateSchema
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

import dotenv
import os


dotenv.load_dotenv()

HOST = os.getenv('SQL_HOST')
PORT = os.getenv('SQL_PORT')
DATABASE = os.getenv('SQL_DB')
SCHEMA_NAME = os.getenv('SQL_SCHEMA') or 'public'
USERNAME = os.getenv('SQL_USERNAME')
PASSWORD = os.getenv('SQL_PASSWORD')

DB_STRING = "postgresql://{}:{}@{}:{}/{}".format(
    USERNAME, PASSWORD, HOST, PORT, DATABASE
)

engine = create_engine(DB_STRING)

if not engine.dialect.has_schema(engine, SCHEMA_NAME):
    engine.execute(CreateSchema(SCHEMA_NAME))

metadata = MetaData(schema=SCHEMA_NAME)
Base = declarative_base(metadata=metadata)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
