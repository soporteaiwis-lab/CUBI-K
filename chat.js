// Cambiar esto:
// const res = await aPost({action: 'chatIA', mensaje: txt});

// Por esto:
const rawRes = await fetch('/api/chat', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ mensaje: txt })
});
const res = await rawRes.json();
// La estructura abajo (res.success, res.respuesta) coincidirá perfectamente y funcionará.
