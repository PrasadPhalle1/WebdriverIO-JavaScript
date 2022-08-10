const eleUtil = require('../utility/ElementUtilities') 

class Test01_PageObjects{

    get bookStoreApplicationCard() {return $('//div/h5[contains(text(), "Book Store Application")]')}
    get widgetsCard() {return $('//div/h5[contains(text(), "Widgets")]')}
    get toolTipsBTN() {return $('//span[contains(text(), "Tool Tips")]')}
    get contraryTXT() {return $('//a[contains(text(), "Contrary")]')}
    get contraryHoveredTXT() {return $('//div[@id= "contraryTexToolTip"]')} // You hovered over the Contrary
    get sectionTXT() {return $('//a[contains(text(), "1.10.32")]')}
    get sectionHoveredTXT() {return $('//div[@id= "sectionToolTip"]')} // You hovered over the 1.10.32

    scrollUpToBookStoreApplicationCard(){
        eleUtil.doScroll(this.bookStoreApplicationCard)
    }

    clickOnWidgetsCard(){
        eleUtil.doClick(this.widgetsCard)
    }

    scrollUpToToolTipsBTN(){
        eleUtil.doScroll(this.toolTipsBTN)
    }

    clickOnToolTipsBTN(){
        eleUtil.doClick(this.toolTipsBTN)
    }

    mouseHoverOnContraryTXT(){
        eleUtil.doMouseHover(this.contraryTXT)
    }

    getContraryHoveredTXT(){
        eleUtil.doGetText(this.contraryHoveredTXT)
    }

    mouseHoverOnSectionTXT(){
        eleUtil.doMouseHover(this.sectionTXT)
    }

    getSectionHoveredTXT(){
        eleUtil.doGetText(this.sectionHoveredTXT)
    }
}
module.exports = new Test01_PageObjects()