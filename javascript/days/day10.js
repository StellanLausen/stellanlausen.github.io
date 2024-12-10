let movableImage;

$(document).ready(function() {
    init();
});

function init() {
    $('.image').click(function() {
        moveSlice(getFreePositions($(this)), $(this));
    });
}

//////////////////
//////////////////
/////Functions////
//////////////////
//////////////////


function getFreePositions(element){
    let position = element.index();
    let allImages = $('.image-container').children();
    let freeELement;

    switch(position) {
        case 0:
            if(allImages.eq(position + 1).hasClass('freeSlice')) freeELement = allImages.eq(position + 1)
            if(allImages.eq(position + 2).hasClass('freeSlice')) freeELement = allImages.eq(position + 2)
            break;
        case 1:
            if(allImages.eq(position - 1).hasClass('freeSlice')) freeELement = allImages.eq(position - 1)
            if(allImages.eq(position + 2).hasClass('freeSlice')) freeELement = allImages.eq(position + 2)
            break;
        case 2:
            if(allImages.eq(position - 2).hasClass('freeSlice')) freeELement = allImages.eq(position - 2)
            if(allImages.eq(position + 1).hasClass('freeSlice')) freeELement = allImages.eq(position + 1)
            if(allImages.eq(position + 2).hasClass('freeSlice')) freeELement = allImages.eq(position + 2)
            break;
        case 3:
            if(allImages.eq(position - 2).hasClass('freeSlice')) freeELement = allImages.eq(position - 2)
            if(allImages.eq(position - 1).hasClass('freeSlice')) freeELement = allImages.eq(position - 1)
            if(allImages.eq(position + 2).hasClass('freeSlice')) freeELement = allImages.eq(position + 2)
            break;
        case 4:
            if(allImages.eq(position - 2).hasClass('freeSlice')) freeELement = allImages.eq(position - 2)
            if(allImages.eq(position + 1).hasClass('freeSlice')) freeELement = allImages.eq(position + 1)
            if(allImages.eq(position + 2).hasClass('freeSlice')) freeELement = allImages.eq(position + 2)
            break;
        case 5:
            if(allImages.eq(position - 2).hasClass('freeSlice')) freeELement = allImages.eq(position - 2)
            if(allImages.eq(position - 1).hasClass('freeSlice')) freeELement = allImages.eq(position - 1)
            if(allImages.eq(position + 2).hasClass('freeSlice')) freeELement = allImages.eq(position + 2)
            break;
        case 6:
            if(allImages.eq(position - 2).hasClass('freeSlice')) freeELement = allImages.eq(position - 2)
            if(allImages.eq(position + 1).hasClass('freeSlice')) freeELement = allImages.eq(position + 1)
            break;
        case 7:
            if(allImages.eq(position - 2).hasClass('freeSlice')) freeELement = allImages.eq(position - 2)
            if(allImages.eq(position - 1).hasClass('freeSlice')) freeELement = allImages.eq(position - 1)
            break;
        default:
    }
    return (freeELement)
}

function moveSlice (freeElement, moveElement) {
    let moveIndex = moveElement.index();
    let freeIndex = freeElement.index();

    if(moveIndex > freeIndex) {
        insertAtIndex(freeIndex, moveElement);
        insertAtIndex(moveIndex, freeElement);
    } else {
        insertAtIndex(moveIndex, freeElement);
        insertAtIndex(freeIndex, moveElement);
    }

    checkResult();
}

function insertAtIndex(index, element) {
    if(index === 0) {
        $('.image-container').prepend(element);
        return;
    }

    $('.image-container').children().eq(index).after(element);
}

function checkResult() {
    let i = 7;
    let result = 0;

    $('.image-container').children().each(
        function () {
            if($(this).hasClass('slice' + i)){
                result++;
            }
            i--;
        }
    )

    if (result === 8){
        $(".freeSlice").removeClass('freeSlice');
        $(".image-container").after('<div class="pyro"> <div class="before"></div> <div class="after"></div></div>');
    }
}
