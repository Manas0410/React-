/**
 * I start by defining clear responsibilities and designing a flexible API that supports
 * controlled and uncontrolled usage. I prioritise accessibility, TypeScript safety,
 * extensibility, and styling flexibility so the component fits multiple design systems.
 * After implementation, I optimise rendering, handle edge cases, add strong test coverage,
 * and document usage to ensure long-term scalability.
 */

/**
 * step by step approach to create a reusable mobile input component - input with dropdown mobile no
 * 1 module seperation => input + country code dropdown
 * 2 deciding main state whether controlled or uncontrolled
 *      for forms uncontrolled with some form lirary like react hook form
 * 3 allow multiple props for customisation
 * Functional Props:
 *      onChange
 *      onCountryChange
 *      onBlur / onFocus
 *
 * UI Props:
 *      label
 *      placeholder
 *      error
 *      disabled
 *      required
 *
 * Data Props:
 *      country/code Value
 *      defaultValues
 *
 * Extensibility:
 *      inputProps
 *      dropdownProps
 *      renderCountryOption (custom rendering)
 *      notAllowedCountryCode
 *
 *  - allow passing ref : useForwardref and useImperativeHandle
 *
 * 4 styling customisation , preclass method for SCSS/CSS modules and utility fxn for tailwind
 *
 * after finalising these 4 points start coding
 *
 * wjhile coding focus on below points
 *
 * 5 a i prefer always to use typescript strictly for reusable components
 *  b Accessibility and SEO
 *
 * once coded
 *
 * 6 making it optimise , using caching hoooks , checking memory leaks and providing optimisation options such as lazy loading and many
 *
 * then last step
 * 7 writing test cases for 95%+ coverage  + adding documentation
 */

/**
 * Approach to Design a Reusable Mobile Number Input Component
 * (Input + Country Code Dropdown)
 *
 * ------------------------------------------------------------
 * 1️⃣ Responsibility & Module Separation
 * ------------------------------------------------------------
 * - Split component into smaller units:
 *      • PhoneInput (parent/orchestrator)
 *      • CountryCodeDropdown
 *      • NumberInput
 * - Follow Single Responsibility Principle
 * - Allows independent reuse and easier maintenance
 *
 * ------------------------------------------------------------
 * 2️⃣ Controlled vs Uncontrolled Design
 * ------------------------------------------------------------
 * - Support both usages:
 *      • Controlled → value + onChange
 *      • Uncontrolled → defaultValue (form libraries like React Hook Form)
 * - Makes component flexible across projects
 *
 * ------------------------------------------------------------
 * 3️⃣ API / Props Design (Most Important)
 * ------------------------------------------------------------
 * Functional Props:
 *      onChange
 *      onCountryChange
 *      onBlur / onFocus
 *
 * Data Props:
 *      value
 *      defaultValue
 *      country
 *      name
 *
 * UI Props:
 *      label
 *      placeholder
 *      error
 *      disabled
 *      required
 *
 * Extensibility:
 *      inputProps
 *      dropdownProps
 *      renderCountryOption (custom rendering)
 *
 * ------------------------------------------------------------
 * 4️⃣ Ref Support (Imperative Control)
 * ------------------------------------------------------------
 * - Use forwardRef + useImperativeHandle
 * - Expose methods:
 *      focus()
 *      clear()
 *      validate()
 * - Useful for form validation & programmatic focus
 *
 * ------------------------------------------------------------
 * 5️⃣ Styling Strategy (Design System Friendly)
 * ------------------------------------------------------------
 * - Support multiple styling approaches:
 *      CSS Modules / SCSS => preclass method
 *      Tailwind class overrides utility fxns
 *
 * - Ensures adoption across different UI systems
 *
 * ------------------------------------------------------------
 * 6️⃣ TypeScript First Development
 * ------------------------------------------------------------
 * - Strict typing for props & events
 * - Country model types
 * - Controlled/uncontrolled prop safety
 * - Improves developer experience & reduces runtime bugs
 *
 * ------------------------------------------------------------
 * 7️⃣ Accessibility (WCAG Compliance)
 * ------------------------------------------------------------
 * - Proper label association
 * - Keyboard navigation support
 * - aria-expanded / aria-controls
 * - Screen reader friendly dropdown
 * - Correct tabIndex handling
 * - input type="tel" for mobile keyboards
 *
 * ------------------------------------------------------------
 * 8️⃣ Performance Optimisation
 * ------------------------------------------------------------
 * - Memoize country list
 * - React.memo for dropdown items
 * - Lazy load flag icons
 * - Debounce formatting logic
 * - Prevent unnecessary re-renders
 *
 * ------------------------------------------------------------
 * 9️⃣ Edge Case Handling (Senior-Level Thinking)
 * ------------------------------------------------------------
 * - Paste full number (+91xxxxxxxx)
 * - Auto country detection
 * - Cursor position preservation
 * - Formatting while typing
 * - RTL language support
 *
 * ------------------------------------------------------------
 * 🔟 Testing Strategy
 * ------------------------------------------------------------
 * - Unit tests for logic
 * - Accessibility tests
 * - Keyboard navigation tests
 * - Form library integration tests
 * - Aim for high coverage on critical flows
 *
 * ------------------------------------------------------------
 * 1️⃣1️⃣ Documentation & Developer Experience
 * ------------------------------------------------------------
 * - Storybook examples
 * - Prop documentation
 * - Usage guidelines & edge cases
 *
 * ------------------------------------------------------------
 * ✅ Philosophy
 * ------------------------------------------------------------
 * Reusable components should be treated like internal libraries,
 * focusing on API stability, extensibility, accessibility,
 * and long-term scalability — not just UI reuse.
 */
