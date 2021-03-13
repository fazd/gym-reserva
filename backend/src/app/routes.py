from . import app, prefix
from starlette.responses import RedirectResponse

@app.get("/api/", include_in_schema=False)
def docs_redirect():
    return RedirectResponse(prefix + "/docs")

@app.get("/api/reserve")
def reserve():
    return 'hola'