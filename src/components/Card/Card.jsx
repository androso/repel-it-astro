import React from 'react';
import './Card.css'

export default function Card({ href, title, body }) {
 return (
		<li className="link-card">
			<a href={href}>
				<h2>
					{title}
					<span>&rarr;</span>
				</h2>
				<p>
					{body}
				</p>
			</a>
		</li>
	)
}
