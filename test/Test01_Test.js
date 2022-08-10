const test01PO = require('../pageObjects/Test01_PageObjects')
const test01EleUtil = require('../utility/ElementUtilities')
// let Screenshot = 'chrome-' + Date.now()

describe('Sample Test for Mouse Hover', async () => {

    it('Navigate to URL and click on Widgets Card', async () => {

        await browser.maximizeWindow()
        await browser.url('https://demoqa.com/')
        // await browser.url('https://demoqa.com/tool-tips')
        await browser.pause(3000)

        // let pageURL = await browser.getUrl()                 // Old way of Assertion
        // console.log('Page URL is: ' + pageURL)               // Old way of Assertion
        // expect(pageURL).toContain('https://demoqa.com/')    // Old way of Assertion
        expect(browser).toHaveUrlContaining('https://demoqa.com/')  // New way of Assertion

        // let pageTitle = await browser.getTitle()             // Old way of Assertion
        // console.log('Page Title is: ' + pageTitle)           // Old way of Assertion
        // expect(pageTitle).toContain('ToolsQA')               // Old way of Assertion
        expect(browser).toHaveTitleContaining('ToolsQA')        // New way of Assertion

        await test01PO.bookStoreApplicationCard.scrollIntoView()
        await browser.pause(2000)
        await test01PO.widgetsCard.click()
        await browser.pause(2000)

        // let d = new Date();
        // let ScreenshotTime = d.toLocaleTimeString();

        // browser.saveScreenshot('./Screenshots/' + Screenshot + '.png')
        await test01EleUtil.fullScreenshot()
        await browser.pause(2000)

    })

    it('Mouse Hover on texts', async () => {

        await test01PO.toolTipsBTN.scrollIntoView()
        await browser.pause(1000)
        await test01PO.toolTipsBTN.click()
        await browser.pause(2000)
        await test01PO.contraryTXT.moveTo()
        const text1 = await test01PO.contraryTXT.getText()
        console.log('1st mouse hover on text: ' + text1)
        await test01PO.contraryHoveredTXT.waitForDisplayed({ timeout: 3000 })
        const hoveredText1 = await test01PO.contraryHoveredTXT.getText()
        console.log('1st mouse hovered Too Tip text: ' + hoveredText1)
        await browser.pause(2000)
        await test01PO.sectionTXT.scrollIntoView()
        await browser.pause(1000)
        await test01PO.sectionTXT.moveTo()
        const text2 = await test01PO.sectionTXT.getText()
        console.log('2nd mouse hover on text: ' + text2)
        await test01PO.sectionHoveredTXT.waitForDisplayed({ timeout: 3000 })
        const hoveredText2 = await test01PO.sectionHoveredTXT.getText()
        console.log('2nd mouse hovered Too Tip text: ' + hoveredText2)

        // browser.saveScreenshot('./Screenshots/' + Screenshot + '.png')
        await test01EleUtil.fullScreenshot()
        await browser.pause(2000)





        // test01PO.scrollUpToBookStoreApplicationCard()
        // await browser.pause(2000)

        // test01PO.clickOnWidgetsCard()
        // await browser.pause(2000)

        // test01PO.scrollUpToToolTipsBTN()
        // await browser.pause(2000)

        // test01PO.clickOnToolTipsBTN()
        // await browser.pause(2000)

        // test01PO.mouseHoverOnContraryTXT()
        // await browser.pause(5000)

        // test01PO.getContraryHoveredTXT()
        // await browser.pause(2000)

        // test01PO.mouseHoverOnSectionTXT()
        // await browser.pause(2000)

        // test01PO.getSectionHoveredTXT()
        // await browser.pause(5000)

    })
})