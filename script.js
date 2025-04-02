// Tab functionality
function setupTabs(tabsSelector, contentSelector, activeClass = 'active') {
    const tabs = document.querySelectorAll(tabsSelector);
    const contents = document.querySelectorAll(contentSelector);
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs and contents
            tabs.forEach(t => t.classList.remove(activeClass));
            contents.forEach(c => c.classList.remove(activeClass));
            
            // Add active class to clicked tab
            tab.classList.add(activeClass);
            
            // Show corresponding content
            const target = tab.getAttribute('data-target');
            document.getElementById(`${target}-content`).classList.add(activeClass);
        });
    });
}

// Project filtering
function setupFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                if (filter === 'all' || card.
