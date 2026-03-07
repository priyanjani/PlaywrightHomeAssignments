import test from "@playwright/test"
import dotenv from 'dotenv'
import {parse} from 'csv-parse/sync'
import fs from 'node:fs'
import editlead from '../../testData/editlead.json';


const Value=process.env.EnvFile||"QA"||"LeafTap_LoginDev"
dotenv.config({path:`testData/${Value}.env`})

let readvalue:any[] = parse(fs.readFileSync(`testData/createlead.csv`),{

    columns:true,
    skip_empty_lines:true
})

for (let login of readvalue){

test(`E2E Data parameterization ${login.Testid}`,async({page})=>{
    let url=process.env.LeafTap_Url as string
    let user=process.env.LeafTap_Username as string
    let pass=process.env.LeafTap_Password as string
let testleaf =editlead[0]
await page.goto(url)
await page.locator("#username").fill(user)
await page.locator("#password").fill(pass)
await page.locator(".decorativeSubmit").click()
await page.locator("//a[contains(text(),'CRM')]").click()
await page.locator("//a[contains(text(),'Leads')]").click()
await page.locator("//a[contains(text(),'Create Lead')]").click()
await page.locator(`text='Create Lead'`).first().click()
await page.waitForTimeout(1000)
await page.locator("#createLeadForm_companyName").fill(login.compname)
await page.locator("#createLeadForm_firstName").fill(login.firstname)
await page.locator("#createLeadForm_lastName").fill(login.lastname)
await page.locator("//input[@class='smallSubmit']").click()
await page.waitForTimeout(2000)
await page.locator("//a[text()='Edit']").click()
await page.locator("#updateLeadForm_companyName").fill(testleaf.EdCompname)
await page.locator("#updateLeadForm_firstName").fill(testleaf.Edfirstname)
await page.locator("#updateLeadForm_lastName").fill(testleaf.Edlastname)
await page.waitForTimeout(2000)
await page.locator(".smallSubmit").first().click()
})
}