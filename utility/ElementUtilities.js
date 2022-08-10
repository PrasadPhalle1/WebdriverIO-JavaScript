// const { remote } = require('webdriverio');
const format1=require('date-fns')
class ElementUtilities {

    doClick(element) {
        element.waitForDisplyed()
        element.click()
    }

    doSetValue(element, value) {
        element.waitForDisplyed()
        element.setValue(value)
    }

    async doGetText(element) {
        await element.waitForDisplyed()
        return await element.getText()
    }

    doScroll(element) {
        element.waitForDisplyed()
        element.scrollIntoView()
    }

    async doMouseHover(element) {
        element.waitForDisplyed()
        element.moveTO()
        console.log('You hovered over: ' + await element.getText())
        await browser.pause(3000)
    }

    async fullScreenshot() {
        const d1 = new Date();
        let date = format1.format(d1, 'dd-MM-yyyy-HH-mm-ss');
        console.log(date);
        await browser.saveScreenshot("./Screenshots/" + "Screenshot-" + date + ".png");
    }
}
module.exports = new ElementUtilities()