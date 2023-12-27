from pydantic import BaseModel
from datetime import date


class Doacao(BaseModel):
    montante: float
    nome: str
    email: str
    aquem: str
    metodoPagamento: str