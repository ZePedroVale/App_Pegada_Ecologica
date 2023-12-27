from fastapi import APIRouter
from models.calculadora import Calculadora
from config.db import conn
from schemas.calculadora import serializeDict, serializeList
from bson import ObjectId
calculadora = APIRouter()


@calculadora.get('/')
async def find_all_calculadoras():
    return serializeList(conn.app.calculadora.find())

@calculadora.get('/{id}')
async def find_one_calculadora(id):
    return serializeDict(conn.app.calculadora.find_one({"_id":ObjectId(id)}))

@calculadora.post('/')
async def create_calculadora(calculadora: Calculadora):
    conn.app.calculadora.insert_one(dict(calculadora))
    return serializeList(conn.app.calculadora.find())

@calculadora.put('/{id}')
async def update_calculadora(id,calculadora: Calculadora):
   conn.app.calculadora.find_one_and_update({"_id":ObjectId(id)},{
       "$set":dict(calculadora)
   })
   return serializeDict(conn.app.calculadora.find_one({"_id":ObjectId(id)}))

@calculadora.delete('/{id}')
async def delete_calculadora(id,calculadora: Calculadora):
   return serializeDict(conn.app.calculadora.find_one_and_delete({"_id":ObjectId(id)}))