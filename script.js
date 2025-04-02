
// Tab functionality
document.addEventListener('DOMContentLoaded', function() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons and contents
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Show corresponding content
            const target = this.getAttribute('data-target');
            document.getElementById(`${target}-content`).classList.add('active');
        });
    });
});


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
