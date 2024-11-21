let markRead = document.querySelector(".mark-read");

markRead.addEventListener("click", handleClick);

function handleClick() {
  let newNotifications =
    document.querySelectorAll(".unread");
  if (newNotifications) {
    let circles = document.querySelectorAll(".circle");
    circles.forEach((circle) => circle.remove());
    newNotifications.forEach((unreadNotification) => {
      unreadNotification.classList.remove(
        "bg-notification-bg-unread"
      );
      unreadNotification.classList.remove("unread");
    });
  }
}
