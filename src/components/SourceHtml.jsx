import React from 'react';
import dateFormat from 'dateformat';

export default class SourceHtml extends React.Component {
    sourcesHtml(sources) {
        let htmlString = "<p>\n";
        htmlString += "    Sources: <br />\n";
        for (let i = 0; i < sources.length; i++) {
            let source = sources[i];
            htmlString += "    " + (i + 1) + ". " + source.publication_name +
                ", \"" + source.title + ",\" " +
                "<a href=\"" + source.url + "\" target=\"_blank\">" +
                dateFormat(source.date, "mmmm dS, yyyy") +
                "</a>. <br />\n"
        }
        htmlString += "</p>";
        return htmlString;
    }

    render() {
        return <pre>
            <code>
            {this.sourcesHtml(this.props.sources)}
            </code>
        </pre>
    }
}