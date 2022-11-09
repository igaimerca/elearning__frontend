import path from 'path'
import { PlaywrightTestConfig, devices } from '@playwright/test'

// Reference: https://playwright.dev/docs/test-configuration
const config: PlaywrightTestConfig = {
    timeout: 30 * 1000,
    testDir: path.join(__dirname, 'e2e'),
    retries: 2,
    outputDir: 'test-results/',
    webServer: {
        command: 'npm run dev',
        port: 3000,
        timeout: 120 * 1000,
        reuseExistingServer: !process.env.CI
    },

    use: {
        trace: 'retry-with-trace'
    },

    projects: [
        {
            name: 'Desktop Chrome',
            use: {
                ...devices['Desktop Chrome']
            }
        },
        {
            name: 'Desktop Firefox',
            use: {
                ...devices['Desktop Firefox']
            }
        },
        {
            name: 'Desktop Safari',
            use: {
                ...devices['Desktop Safari']
            }
        },
        {
            name: 'Mobile Chrome',
            use: {
                ...devices['Pixel 5']
            }
        },
        {
            name: 'Mobile Safari',
            use: devices['iPhone 12']
        }
    ]
}
export default config
