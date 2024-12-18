import React from "react";
import styles from "./CategoryCard.module.css";
// import PropTypes from "prop-types"; // Optional: for prop type validation

const CategoryCard = ({
  icon: Icon,
  title,
  size = 40,
  color = "#2aa8ff",
  onClick,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>
        <Icon size={size} onClick />
      </div>
      <div className={styles.title}>{title}</div>
    </div>
  );
};

// PropTypes for validation (optional)
// CategoryCard.propTypes = {
//   icon: PropTypes.elementType.isRequired, // A React component (icon)
//   title: PropTypes.string.isRequired, // The card title
// };

export default CategoryCard;
