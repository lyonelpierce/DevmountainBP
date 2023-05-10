const { Builder, Browser, By, Key, until } = require("selenium-webdriver");

let driver;

beforeAll(async () => {
  driver = new Builder().forBrowser(Browser.EDGE).build();
});

afterAll(async () => {
  await driver.quit();
});

describe("Testing movies app", () => {
    test("Can add a movie", async () => {
        await driver.get("http://localhost:3000")
        await driver.sleep(2000)

        await driver.findElement(By.id("add-movie-input")).sendKeys("Interstellar", Key.RETURN)
        await driver.sleep(2000)

        const addedMovie = await driver.wait(until.elementLocated(By.css("#movies-list li label")))
        expect(await addedMovie.getText()).toBe('Interstellar')
    })

    test("Can mark as watched the movie below", async() => {
        const watched = await driver.findElement(By.xpath("//li[contains(label/text(), 'Interstellar')]/input"));
        await watched.click();

        expect(await watched.isSelected()).toBe(true);
    })

    test("Can check if the watched movie notification is being displayed", async() => {
        const notification = await driver.findElement(By.id("message"))
        const isDisplayed = await notification.isDisplayed();

        expect(isDisplayed).toBe(true);
    })

    test("Can delete the movie below", async () => {
        await driver.findElement(By.xpath("//li[contains(label/text(), 'Interstellar')]/button")).click();
        await driver.sleep(2000)

        const listItems = await driver.findElements(By.css("#movies-list li"));
        expect(listItems.length).toBe(0);
    })
})
