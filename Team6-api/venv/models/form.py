from pydantic import BaseModel

class Form(BaseModel):
    nome: str
    email: str
    porque: str
    como: str
    localizacao: str
    data_inicio: str
    data_fim: str
    aceita_termos: bool