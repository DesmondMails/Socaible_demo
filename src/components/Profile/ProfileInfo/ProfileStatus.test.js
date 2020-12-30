import React from 'react'
import { create } from 'react-test-renderer'
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status='fox'/>)
        const instance = component.getInstance()
        expect(instance.state.status).toBe('fox')
    })
    test("after creation span should be displayed with status", () => {
        const component = create(<ProfileStatus status='fox'/>)

        const root = component.root
        let span = root.findByType("span")

        expect(span).not.toBeNull()
    })
    test("after creation input should be none", () => {
        const component = create(<ProfileStatus status='fox'/>)
        const root = component.root

        expect(() => {
            let input = root.findByType("input")
        }).toThrow()
    })

    test("after creation span should be contained status", () => {
        const component = create(<ProfileStatus status='fox'/>)

        const root = component.root
        let span = root.findByType("span")

        expect(span.children[0]).toBe('fox')
    })

    test("input should be displayed in editMode instead of span", () => {
        const component = create(<ProfileStatus status='fox'/>)

        const root = component.root
        let span = root.findByType("span")
        span.props.onDoubleClick()

        let input = root.findByType("input")
        expect(input.props.value).toBe('fox')
    })

    test("callback should be called", () => {
        const mockCalled = jest.fn()

        const component = create(<ProfileStatus status='fox' updateStatus={mockCalled}/>)

        const instance = component.getInstance()
        instance.deactivateEditMode()

        expect(mockCalled.mock.calls.length).toBe(1)
    })
})