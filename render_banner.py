import asyncio
from pathlib import Path
from playwright.async_api import async_playwright

async def render():
    html_path = Path(r"e:\Scripts\Gemini Generator\assets\banner_template.html").resolve()
    out_path = Path(r"e:\Scripts\Gemini Generator\assets\banner.png").resolve()
    
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        # Viewport exactly 2100 x 900 (21:9 aspect ratio)
        page = await browser.new_page(
            viewport={"width": 2100, "height": 900},
            device_scale_factor=1
        )
        
        await page.goto(html_path.as_uri(), wait_until="networkidle")
        # Wait for fonts to finish loading
        await page.evaluate("document.fonts.ready")
        # Small wait for layout stability
        await page.wait_for_timeout(500)
        
        # Take full precision screenshot
        await page.screenshot(
            path=str(out_path),
            clip={"x": 0, "y": 0, "width": 2100, "height": 900},
            type="png"
        )
        await browser.close()
        print(f"Rendered: {out_path}")

if __name__ == "__main__":
    asyncio.run(render())
