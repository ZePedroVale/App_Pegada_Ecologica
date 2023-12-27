from fastapi import APIRouter
from models.form import Form
from config.db import conn
from schemas.form import serializeDict, serializeList
from bson import ObjectId
form = APIRouter()


@form.get('/')
async def find_all_forms():
    return serializeList(conn.app.form.find())

@form.get('/{id}')
async def find_one_form(id):
    return serializeDict(conn.app.form.find_one({"_id":ObjectId(id)}))

@form.post('/')
async def create_form(form: Form):
    conn.app.form.insert_one(dict(form))
    return serializeList(conn.app.form.find())

@form.put('/{id}')
async def update_form(id,form: Form):
   conn.app.form.find_one_and_update({"_id":ObjectId(id)},{
       "$set":dict(form)
   })
   return serializeDict(conn.app.form.find_one({"_id":ObjectId(id)}))

@form.delete('/{id}')
async def delete_form(id,form: Form):
   return serializeDict(conn.app.form.find_one_and_delete({"_id":ObjectId(id)}))