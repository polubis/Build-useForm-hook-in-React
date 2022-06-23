describe("useForm()", () => {
  describe("after mount", () => {
    it("returns keys from values", () => {});
    it("returns init values", () => {});
    it("validates", () => {});
    it("sets interaction metadata", () => {});
  });

  describe("during validation", () => {
    it("injects value and values to validator function", () => {});
  });

  describe("set()", () => {
    it("sets values", () => {});
    it("validates", () => {});
    it("updates metadata", () => {});
  });

  describe("confirm()", () => {
    it("validates", () => {});
    it("updates metadata", () => {});
  });

  describe("submit()", () => {
    it("validates", () => {});
    it("updates metadata", () => {});
    it("prevents default", () => {});
  });

  describe("change()", () => {
    it("sets values", () => {});
    it("validates", () => {});
    it("updates metadata", () => {});

    describe("skips update and", () => {
      it("logs an error when lack of name property", () => {});
      it("logs an error when property is different than declared on init", () => {});
      it("logs an error when runtime types differs", () => {});
    });
  });

  describe("reset()", () => {
    it("resets state to initial", () => {});
  });

  describe("on()", () => {
    it("allows to listen for properties change", () => {});
  });
});
