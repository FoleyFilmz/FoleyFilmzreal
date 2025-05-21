
function showVideos() {
  document.querySelector('.event-card').classList.add('hidden');
  document.getElementById('videos').classList.remove('hidden');
}
function goBack() {
  document.getElementById('videos').classList.add('hidden');
  document.querySelector('.event-card').classList.remove('hidden');
}
