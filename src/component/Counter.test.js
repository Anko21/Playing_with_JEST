import { render, screen, fireEvent} from "@testing-library/react";
import Counter from "./Counter";
import userEvent from '@testing-library/user-event'

// test('description', anonymus function()=>{

// })

test('Initial value of countershould be 0', ()=>{
    render(<Counter/>);
    const counterElement = screen.getByText(0);
    expect(counterElement).toBeInTheDocument();
})

test('Initial value of countershould be 0', ()=>{
    render(<Counter/>);
    const counterElement = screen.getByTestId("cnt");
    expect(counterElement).toBeInTheDocument();
})

//userEvent vs fireEvent for mouserelated events
test('onClick should increment by 1, fireEvent', ()=>{
    render(<Counter/>);
    const btnElement = screen.getByTestId("btn");
    const counterElement = screen.getByTestId("cnt");
    expect(counterElement.textContent).toBe("0");
    fireEvent.click(btnElement)
    expect(counterElement.textContent).not.toBe("2");
})

//userEvent vs fireEvent for mouserelated events
test('onClick should increment by 1,userEvent', async()=>{
    render(<Counter/>);
    const btnElement = screen.getByTestId("btn");
    const counterElement = screen.getByTestId("cnt");
    expect(counterElement.textContent).toBe("0");
    await userEvent.click(btnElement)
    expect(counterElement.textContent).toBe("1");
})

//tobeNull(), not.tobeNull()

test('input should have 10 as initial value if */defaultValue={10}/*',()=>{
    render(<Counter/>);
    const inputEl = screen.getByTestId("inp");
    expect(inputEl.value).toBe("10");
})

test('entering value in input works',()=>{
    render(<Counter/>);
    const inputEl = screen.getByTestId("inp");
    fireEvent.change(inputEl,{
        target: {
            value:11
        }
    })
    expect(inputEl.value).toBe("11");
})

test("snapshot test",()=>{
    expect(render(<Counter/>)).toMatchSnapshot()
})

//press u to update snapshot