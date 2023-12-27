from fastapi import FastAPI
from routes.calculadora import calculadora
from routes.noticia import noticia
from routes.form import form
from routes.doacao import doacao
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

app.include_router(doacao, prefix="/doacao")
app.include_router(noticia, prefix="/noticia")
app.include_router(form, prefix="/form")
app.include_router(calculadora, prefix="/calculadora")
