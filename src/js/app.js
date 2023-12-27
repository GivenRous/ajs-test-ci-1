export default function playerStatus({ player }) {
  if (player.health > 50) {
    return "healthy";
  }
  if (player.health < 15) {
    return "critical";
  }
  return "wounded";
}
