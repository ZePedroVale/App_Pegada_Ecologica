from fastapi import APIRouter
from models.noticia import Noticia
from config.db import conn
from schemas.noticia import serializeDict, serializeList
from bson import ObjectId
noticia = APIRouter()


@noticia.get('/')
async def find_all_noticias():
    return serializeList(conn.app.noticia.find())

@noticia.get('/{id}')
async def find_one_noticia(id):
    return serializeDict(conn.app.noticia.find_one({"_id":ObjectId(id)}))

@noticia.post('/')
async def create_noticia(noticia: Noticia):
    conn.app.noticia.insert_one(dict(noticia))
    return serializeList(conn.app.noticia.find())

@noticia.put('/{id}')
async def update_noticia(id,noticia: Noticia):
   conn.app.noticia.find_one_and_update({"_id":ObjectId(id)},{
       "$set":dict(noticia)
   })
   return serializeDict(conn.app.noticia.find_one({"_id":ObjectId(id)}))

@noticia.delete('/{id}')
async def delete_noticia(id,noticia: Noticia):
   return serializeDict(conn.app.noticia.find_one_and_delete({"_id":ObjectId(id)}))
