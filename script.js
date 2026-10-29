(() => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduced && 'IntersectionObserver' in window) {
    document.documentElement.classList.add('js-motion');
    const items = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        currentObserver.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -24px 0px' });
    items.forEach(item => observer.observe(item));
  }

  const approachSteps = [
    {
      label: '01 / PURPOSE',
      title: 'Start with the outcome people need.',
      text: 'I clarify the customer or business need, what success should look like, who owns key decisions, and which constraints shape the work. This reflects my foundation in payments operations and customer-facing service.',
      tags: ['Outcome definition', 'Stakeholder alignment', 'Decision ownership']
    },
    {
      label: '02 / MOBILIZE',
      title: 'Make the path and ownership visible.',
      text: 'I bring the right people together, turn priorities into a delivery plan, and surface dependencies, capacity questions and risks early. Product, engineering, QA, operations and partners can then work from the same picture.',
      tags: ['Milestones', 'Cross-functional teams', 'Risks & dependencies']
    },
    {
      label: '03 / EXECUTION',
      title: 'Create a steady rhythm for decisions.',
      text: 'I use clear reporting and regular checkpoints to show what is moving, what is blocked and where a decision is needed. The aim is dependable progress with enough flexibility to respond when conditions change.',
      tags: ['Delivery governance', 'Transparent status', 'Issue resolution']
    },
    {
      label: '04 / IMPROVEMENT',
      title: 'Leave the operation stronger.',
      text: 'Delivery includes readiness, handover and learning. I look at feedback and service outcomes with the team, then capture practical improvements that make the platform and its operating model more sustainable.',
      tags: ['Customer outcomes', 'Operational readiness', 'Continuous improvement']
    }
  ];

  const stepButtons = [...document.querySelectorAll('.approach-step')];
  const detail = document.querySelector('#approach-detail');
  if (detail && stepButtons.length) {
    stepButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        const step = approachSteps[index];
        stepButtons.forEach((item, itemIndex) => {
          const active = itemIndex === index;
          item.classList.toggle('is-active', active);
          item.setAttribute('aria-selected', String(active));
          item.tabIndex = active ? 0 : -1;
        });
        detail.innerHTML = `<div class="approach-detail-number">${step.label}</div><h3>${step.title}</h3><p>${step.text}</p><div class="approach-tags">${step.tags.map(tag => `<span>${tag}</span>`).join('')}</div>`;
      });
      button.addEventListener('keydown', event => {
        if (!['ArrowDown', 'ArrowRight', 'ArrowUp', 'ArrowLeft'].includes(event.key)) return;
        event.preventDefault();
        const direction = ['ArrowDown', 'ArrowRight'].includes(event.key) ? 1 : -1;
        const next = (index + direction + stepButtons.length) % stepButtons.length;
        stepButtons[next].focus();
        stepButtons[next].click();
      });
    });
  }

  const contactForm = document.querySelector('#contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', event => {
      event.preventDefault();
      if (!contactForm.reportValidity()) return;
      const form = new FormData(contactForm);
      const subject = encodeURIComponent(`Portfolio enquiry: ${form.get('topic')}`);
      const body = encodeURIComponent(`Hello Shubham,\n\n${form.get('message')}\n\n— ${form.get('name')}\n${form.get('email')}\nTopic: ${form.get('topic')}`);
      const status = document.querySelector('#form-status');
      if (status) status.textContent = 'Your email app is opening with your message ready to review and send.';
      window.location.href = `mailto:shubhamjain8010@gmail.com?subject=${subject}&body=${body}`;
    });
  }
})();
