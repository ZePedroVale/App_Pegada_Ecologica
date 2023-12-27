from pydantic import BaseModel


class Noticia(BaseModel):
    nome: str
    tipo: str
    descricao: str
    foto: str
    link:str
