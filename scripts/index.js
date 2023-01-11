const flexBlock = document.querySelector('.flex-block');
const blocks = document.querySelectorAll('.flex-block__item')
let size;

blocks.forEach(item => {
    item.addEventListener('click', (event) => {
        blocks.forEach(b => b.classList.remove('current'));
        item.classList.add('current');
    });
});

const blockSize = document.querySelector('#blockSize');
blockSize.addEventListener('change', (event) => {
    size = event.target.value + 'px';
    blocks.forEach(block => {
        block.style.width = size;
        block.style.height = size;
    });
});

const flexDirection = document.querySelector('#flexDirection');
flexDirection.addEventListener('input', (event) => {
    flexBlock.style.flexDirection = event.target.value;
});

const flexWrap = document.querySelector('#flexWrap');
flexWrap.addEventListener('input', (event) => {
    flexBlock.style.flexWrap = event.target.value;
});

const justifyContent = document.querySelector('#justifyContent');
justifyContent.addEventListener('input', (event) => {
    flexBlock.style.justifyContent = event.target.value;
});

const alignItems = document.querySelector('#alignItems');
alignItems.addEventListener('input', (event) => {
    if (event.target.value === 'stretch') {
        blocks.forEach(block => {
            block.style.height = 'auto';
        });
        flexBlock.style.alignItems = event.target.value;
    } else {
        blocks.forEach(block => {
            block.style.width = size;
            block.style.height = size;
        });
        flexBlock.style.alignItems = event.target.value;
    }
});

const alignSelf = document.querySelector('#alignSelf');
alignSelf.addEventListener('input', (event) => {
    flexBlock.querySelector('.current').style.alignSelf = event.target.value;
});

const order = document.querySelector('#order');
order.addEventListener('input', (event) => {
    flexBlock.querySelector('.current').style.order = event.target.value;
});

const flexGrow = document.querySelector('#flexGrow');
flexGrow.addEventListener('input', (event) => {
    flexBlock.querySelector('.current').style.flexGrow = event.target.value;
});

const flexShrink = document.querySelector('#flexShrink');
flexShrink.addEventListener('input', (event) => {
    flexBlock.querySelector('.current').style.flexShrink = event.target.value;
});

const flexBasis = document.querySelector('#flexBasis');
flexBasis.addEventListener('input', (event) => {
    flexBlock.querySelector('.current').style.flexBasis = event.target.value;
});