import { render, screen, fireEvent} from "@testing-library/react";
import Users from "./Users";
import userEvent from '@testing-library/user-event'

beforeEach(()=>{
    render(<Users/>);
})
test('checking data retrieval in list items',async()=>{
    //const liEl = screen.getByRole("listitem");
    const liEl = await screen.findAllByRole("listitem");
    expect(liEl).not.toHaveLength(0);
})


test('checking data retrieval in list items with Mock',async()=>{

    window.fetch = jest.fn()

    window.fetch.mockResolvedValueOnce({
        json:async()=>{
            return [{email: 'abc@test.com',username:'abctest'}]
        }
    })

    const liEl = await screen.findAllByRole("listitem");
    expect(liEl).not.toHaveLength(0);
})