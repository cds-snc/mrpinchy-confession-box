import React from "react"
import { shallow } from "enzyme"

import Form from "../components/form"

describe("Input form", function() {
  it("Should render", () => {
    const wrapper = shallow(<Form />)
    expect(wrapper.find("form").exists()).toBe(true)
  })

  it("Should generate no error if message is appropriate", () => {
    const wrapper = shallow(<Form />)
    wrapper.find("textarea").simulate("change", {
      target: { name: "value", value: "Hello Mr. Pinchy!" },
    })

    expect(wrapper.state("formError")).toEqual("none")
  })

  it("Should generate error if message contains script tag", () => {
    const wrapper = shallow(<Form />)
    wrapper.find("textarea").simulate("change", {
      target: {
        name: "value",
        value: "<script>My malicious javascript</script>",
      },
    })

    expect(wrapper.state("formError")).toEqual("script-tag")
  })

  it("Should generate error if message is empty", () => {
    const wrapper = shallow(<Form />)
    wrapper
      .find("textarea")
      .simulate("change", { target: { name: "value", value: "" } })

    expect(wrapper.state("formError")).toEqual("empty-message")
  })

  it("Should generate error if message contains profanity", () => {
    const wrapper = shallow(<Form />)
    wrapper.find("textarea").simulate("change", {
      target: { name: "value", value: "ash0le" },
    })

    expect(wrapper.state("formError")).toEqual("profanity")
  })

  it("Should generate error if message contains only numbers", () => {
    const wrapper = shallow(<Form />)
    wrapper.find("textarea").simulate("change", {
      target: { name: "value", value: "11231424124" },
    })

    expect(wrapper.state("formError")).toEqual("no-words")
  })
})
