from pydantic import BaseModel
from datetime import date

class Calculadora(BaseModel):
    primeiro_nome: str
    ultimo_nome: str
    email: str
    tele: str
    consumo_energia: float
    uso_transporte: str
    tipo_alimentacao: str
    data_calculo: date
    resultado_pegada: float