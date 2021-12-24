function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
    // tabs
    const tabs = document.querySelectorAll(tabsSelector),
          tabsContent = document.querySelectorAll(tabsContentSelector),
          tabsParent = document.querySelector(tabsParentSelector);

    function hideTabContent() {
        tabsContent.forEach((item) => {
            item.classList.remove('show', 'fade');
            item.classList.add('hide');
        });
        tabs.forEach((item) => {
            item.classList.remove(activeClass);
        });
    };

    function showTabContent(i = 0) {
        tabsContent[i].classList.remove('hide');
        tabsContent[i].classList.add('show', 'fade');
        tabs[i].classList.add(activeClass);
    };

    tabsParent.addEventListener('click', (e) => {
        const target = e.target;
        //console.dir(target);
        if (target && target.classList.contains(tabsSelector.slice(1))) {
            tabs.forEach((item, n) => {
                if (item == target) {
                    hideTabContent();
                    showTabContent(n);
                    console.log(`Клик на ${n} таб`);
                }
            })
        }
    });

    hideTabContent();
    showTabContent();
}

export default tabs;