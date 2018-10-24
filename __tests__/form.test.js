import React from "react"
import { shallow } from "enzyme"

import Form from "../components/form"

describe("Input form", function() {
  it("Should render", () => {
    const wrapper = shallow(<Form />)
    expect(wrapper.find("form").exists()).toBe(true)
  })
})
