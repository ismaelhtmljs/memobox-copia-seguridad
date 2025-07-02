self.addEventListener("push", function (event) {
  const data = event.data?.json() || { title: "¡Recordatorio!", body: "Tienes una nota pendiente." };

  event.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: "/icon.png", // Opcional: ícono de la noti
    })
  );
});
