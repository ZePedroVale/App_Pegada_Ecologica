from fastapi import APIRouter
from models.doacao import Doacao
from config.db import conn
from schemas.doacao import serializeDict, serializeList
from bson import ObjectId
doacao = APIRouter()


@doacao.get('/')
async def find_all_doacoes():
    return serializeList(conn.app.doacao.find())

@doacao.get('/{id}')
async def find_one_doacao(id):
    return serializeDict(conn.app.doacao.find_one({"_id":ObjectId(id)}))

@doacao.post('/')
async def create_doacao(doacao: Doacao):
    conn.app.doacao.insert_one(dict(doacao))
    return serializeList(conn.app.doacao.find())

@doacao.put('/{id}')
async def update_doacao(id,doacao: Doacao):
   conn.app.doacao.find_one_and_update({"_id":ObjectId(id)},{
       "$set":dict(doacao)
   })
   return serializeDict(conn.app.doacao.find_one({"_id":ObjectId(id)}))

@doacao.delete('/{id}')
async def delete_doacao(id,doacao: Doacao):
   return serializeDict(conn.app.doacao.find_one_and_delete({"_id":ObjectId(id)}))