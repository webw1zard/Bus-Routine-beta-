function toggleAnswer(element) {
    const answer = element.nextElementSibling;
    const isActive = element.classList.contains('active');
  
    document.querySelectorAll('.faq-answer').forEach((el) => (el.style.display = 'none'));
    document.querySelectorAll('.faq-question').forEach((el) => el.classList.remove('active'));
  
    if (!isActive) {
      answer.style.display = 'block';
      element.classList.add('active');
    }
  }
  