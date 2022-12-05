import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import StyledInput from "./StyledInput";

export const Input = React.forwardRef(
	({ label, errors, name, children, type, ...props }, ref) => {
		return (
			<StyledInput
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.2 }}
			>
				<span>{label}</span>
				<AnimatePresence>
					<input
						name={name}
						style={errors[name] && { borderColor: "var(--primary)" }}
						ref={ref}
						type="text"
						{...props}
					/>

					{errors[name] && (
						<motion.span
							key={name}
							initial={{ opacity: 0, y: -40 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -5 }}
							className="helper-text"
						>
							{errors[name].message}
						</motion.span>
					)}
				</AnimatePresence>

				{children}
			</StyledInput>
		);
	}
);

export const Select = React.forwardRef(
	({ label, options, name, errors, ...props }, ref) => {
		return (
			<StyledInput
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.2 }}
			>
				<span>{label}</span>
				<select
					name={name}
					style={errors[name] && { borderColor: "var(--primary)" }}
					ref={ref}
					{...props}
				>
					{options.map((item) => (
						<option key={item} value={item}>
							{item}
						</option>
					))}
				</select>

				{errors[name] && (
					<motion.span
						key={name}
						initial={{ opacity: 0, y: -40 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -5 }}
						className="helper-text"
					>
						{errors[name].message}
					</motion.span>
				)}
			</StyledInput>
		);
	}
);
