document.getElementById('collections-tab').addEventListener('click', function() {
    document.getElementById('collections-content').classList.add('active');
    document.getElementById('tags-content').classList.remove('active');
    document.getElementById('collections-tab').classList.add('active');
    document.getElementById('tags-tab').classList.remove('active');
  });
  
  document.getElementById('tags-tab').addEventListener('click', function() {
    document.getElementById('tags-content').classList.add('active');
    document.getElementById('collections-content').classList.remove('active');
    document.getElementById('tags-tab').classList.add('active');
    document.getElementById('collections-tab').classList.remove('active');
  });