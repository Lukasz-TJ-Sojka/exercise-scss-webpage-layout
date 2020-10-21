export const showMore =()=> {

    const showMoreBtns = document.querySelectorAll('.show-more');

    showMoreBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            console.log(e.target)
            e.preventDefault();
            e.target.previousElementSibling.classList.toggle('hidden');
            e.target.previousElementSibling.classList.toggle('shown');
            e.target.classList.toggle('show-more');
            e.target.classList.toggle('show-less');
        })
    })

}