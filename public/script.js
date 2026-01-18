const socket = io("https://sigram.onrender.com/"); // <- сюда вставь ссылку Render

function send() {
  const input = document.getElementById("msg");
  if(input.value.trim() === "") return;
  socket.emit("message", input.value);
  input.value = "";
}

socket.on("message", msg => {
  const div = document.createElement("div");
  div.textContent = msg;
  document.getElementById("messages").appendChild(div);
  
  const messagesDiv = document.getElementById("messages");
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
});
