export const showMore =()=> {

    const showMoreBtns = document.querySelectorAll('.show-more');

    showMoreBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            e.currentTarget.blur();

            const displayedElement = e.target.previousElementSibling;

            if (e.target.classList.contains('show-more')) {
                displayedElement.style.height = `${displayedElement.scrollHeight + 16}px`
            } else if (e.target.classList.contains('show-less')) {
                displayedElement.style.height = '4em';
            }
            
            e.target.classList.toggle('show-more');
            e.target.classList.toggle('show-less');
        })
    })

}