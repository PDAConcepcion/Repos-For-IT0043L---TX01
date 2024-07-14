document.addEventListener('DOMContentLoaded', function() {
    // Select all buttons within the projects-list div
    var buttons = document.querySelectorAll('.projects-list .project');

    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            var link = button.querySelector('a');
            if (link) {
                window.open(link.href, link.target ? link.target : '_self');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const showAllButton = document.getElementById('p9');
    const hideAllButton = document.getElementById('p10');
    const hiddenProjects = document.querySelectorAll('.hidden-project');

    // Initially hide the "Show Less" button
    hideAllButton.style.display = 'none';

    showAllButton.addEventListener('click', () => {
        hiddenProjects.forEach(project => {
            project.classList.remove('hidden-project');
            project.classList.add('fade-in');
        });
        showAllButton.style.display = 'none';
        hideAllButton.style.display = '';
    });

    hideAllButton.addEventListener('click', () => {
        hiddenProjects.forEach(project => {
            project.style.opacity = 0;
            project.classList.remove('hidden-project');
            
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    project.classList.add('fade-out');
                    setTimeout(() => {
                        project.classList.add('hidden-project');
                        project.style.opacity = '';
                        project.classList.remove('fade-out');
                    }, 300);
                });
            });
        });
        hideAllButton.style.display = 'none';
        showAllButton.style.display = '';
    });
});

document.querySelector('.menu-dots').addEventListener('click', function() {
    var hiddenLinksContainer = document.querySelector('.hidden-links-container');
    var isVisible = hiddenLinksContainer.style.display === 'block';
    hiddenLinksContainer.style.display = isVisible ? 'none' : 'block';

    hiddenLinksContainer.onmouseleave = null;

    if (!isVisible) {
        hiddenLinksContainer.onmouseleave = function() {
            setTimeout(function() {
                hiddenLinksContainer.style.display = 'none';
            }, 3000);
        };
    }
});