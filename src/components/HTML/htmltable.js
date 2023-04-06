import React from 'react';

import "./htmltable.css";

const HtmlTable = () => {
  const elements = [
    
        { name: "<a>", description: "Defines a hyperlink" },
        { name: "<abbr>", description: "Defines an abbreviation or acronym" },
        { name: "<address>", description: "Defines contact information for the author/owner of a document" },
        { name: "<area>", description: "Defines an area inside an image map" },
        { name: "<article>", description: "Defines an article" },
        { name: "<aside>", description: "Defines content aside from the page content" },
        { name: "<audio>", description: "Defines sound content" },
        { name: "<b>", description: "Defines bold text" },
        { name: "<base>", description: "Specifies the base URL/target for all relative URLs in a document" },
        { name: "<bdi>", description: "Isolates a part of text that might be formatted in a different direction from other text outside it" },
        { name: "<bdo>", description: "Overrides the current text direction" },
        { name: "<blockquote>", description: "Defines a section that is quoted from another source" },
        { name: "<body>", description: "Defines the document's body" },
        { name: "<br>", description: "Defines a single line break" },
        { name: "<button>", description: "Defines a clickable button" },
        { name: "<canvas>", description: "Used to draw graphics, on the fly, via scripting (usually JavaScript)" },
        { name: "<caption>", description: "Defines a table caption" },
        { name: "<cite>", description: "Defines the title of a work" },
        { name: "<code>", description: "Defines a piece of computer code" },
        { name: "<col>", description: "Specifies column properties for each column within a colgroup element" },
        { name: "<colgroup>", description: "Specifies a group of one or more columns in a table for formatting" },
        { name: "<data>", description: "Adds a machine-readable translation of a given content" },
        { name: "<datalist>", description: "Specifies a list of pre-defined options for input controls" },
        { name: "<dd>", description: "Defines a description/value of a term in a description list" },
        { name: "<del>", description: "Defines text that has been deleted from a document" },
        { name: "<details>", description: "Defines additional details that the user can view or hide" },
        { name: "<dfn>", description: "Specifies a term that is going to be defined within the content" },
        { name: "<dialog>", description: "Defines a dialog box or window" },
        { name: "<div>", description: "Defines a section of a document" },
        { name: "<dl>", description: "Defines a description list" },
        { name: "<dt>", description: "Defines a term/name in a description list" },
        { name: "<em>", description: "Defines emphasized text" },
        { name: "<embed>", description: "Embeds external content or plugin into an HTML document" },
        { name: "<fieldset>", description: "Groups related elements in a form" },
        { name: "<figcaption>", description: "Defines a caption for a figure element" },
        { name: "<figure>", description: "Specifies self-contained content, like illustrations, diagrams, photos, code listings, etc." },
        { name: "<footer>", description: "Defines a footer for a document or section" },
        { name: "<form>", description: "Defines an HTML form for user input" },
        { name: "<h1> to <h6>", description: "Defines HTML headings" },
        { name: "<head>", description: "Defines information about the document" },
        { name: "<header>", description: "Defines a header for a document or section" },
        { name: "<hr>", description: "Defines a thematic change in the content" },
        { name: "<html>", description: "Defines the root of an HTML document" },
        { name: "<i>", description: "Defines a part of text in an alternate voice or mood" },
        { name: "<iframe>", description: "Defines an inline frame" },
        { name: "<img>", description: "Defines an image" },
        { name: "<input>", description: "Defines an input control" },
        { name: "<ins>", description: "Defines a text that has been inserted into a document" },
        { name: "<kbd>", description: "Defines keyboard input" },
        { name: "<label>", description: "Defines a label for an <input> element" },
        { name: "<legend>", description: "Defines a caption for a <fieldset> element" },
        { name: "<li>", description: "Defines a list item" },
        { name: "<link>", description: "Defines the relationship between a document and an external resource (most used to link to style sheets)" },
        { name: "<main>", description: "Specifies the main content of a document" },
        { name: "<map>", description: "Defines a client-side image-map" },
        { name: "<mark>", description: "Defines marked/highlighted text" },
        { name: "<meta>", description: "Defines metadata about an HTML document" },
        { name: "<meter>", description: "Defines a scalar measurement within a known range (a gauge)" },
        { name: "<nav>", description: "Defines navigation links" },
        { name: "<noscript>", description: "Defines an alternate content for users that do not support client-side scripts" },
        { name: "<object>", description: "Defines an embedded object" },
        { name: "<ol>", description: "Defines an ordered list" },
        { name: "<optgroup>", description: "Defines a group of related options in a drop-down list" },
        { name: "<option>", description: "Defines an option in a drop-down list" },
        { name: "<output>", description: "Defines the result of a calculation" },
        { name: "<p>", description: "Defines a paragraph" },
        { name: "<param>", description: "Defines a parameter for an object" },
        { name: "<picture>", description: "Defines a container for multiple image resources" },
        { name: "<pre>", description: "Defines preformatted text" },
        { name: "<progress>", description: "Represents the progress of a task" },
        { name: "<q>", description: "Defines a short quotation" },
        { name: "<rp>", description: "Defines what to show in browsers that do not support ruby annotations" },
        { name: "<rt>", description: "Defines an explanation/pronunciation of characters (for East Asian typography)" },
        { name: "<ruby>", description: "Defines a ruby annotation (for East Asian typography)" },
        { name: "<s>", description: "Defines text that is no longer correct" },
        { name: "<samp>", description: "Defines sample output from a computer program" },
        { name: "<script>", description: "Defines a client-side script" },
        { name: "<section>", description: "Defines a section in a document" },
        { name: "<select>", description: "Defines a drop-down list" },
        { name: "<small>", description: "Defines smaller text" },
        { name: "<source>", description: "Defines multiple media resources for media elements (<video> and <audio>)" },
        { name: "<span>", description: "Defines a section in a document" },
        { name: "<strong>", description: "Defines important text" },
        { name: "<style>", description: "Defines style information for a document" },
        { name: "<sub>", description: "Defines subscripted text" },
        { name: "<summary>", description: "Defines a visible heading for a <details> element" },
        { name: "<sup>", description: "Defines superscripted text" },
        { name: "<table>", description: "Defines a table" },
        { name: "<tbody>", description: "Groups the body content in a table" },
        { name: "<td>", description: "Defines a cell in a table" },
        { name: "<template>", description: "Defines a template" },
        { name: "<textarea>", description: "Defines a multiline input control (text area)" },
        { name: "<tfoot>", description: "Groups the footer content in a table" },
        { name: "<th>", description: "Defines a header cell in a table" },
        { name: "<thead>", description: "Groups the header content in a table" },
        { name: "<time>", description: "Defines a date/time" },
        { name: "<title>", description: "Defines a title for the document" },
        { name: "<tr>", description: "Defines a row in a table" },
        { name: "<track>", description: "Defines text tracks for media elements (<video> and <audio>)" },
        { name: "<u>", description: "Defines text that should be stylistically different from normal text" },
        { name: "<ul>", description: "Defines an unordered list" },
        { name: "<var>", description: "Defines a variable" },
        { name: "<video>", description: "Defines a video or movie" },
        { name: "<wbr>", description: "Defines a possible line-break" }
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>Element</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {elements.map((element) => (
          <tr key={element.name}>
            <td>{element.name}</td>
            <td>{element.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default HtmlTable;
