DROP TABLE IF EXISTS `students`;
CREATE TABLE `students`  (
  `id` bigint(0) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `age` int(0) NULL DEFAULT NULL,
  `gender` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `grade` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of students
-- ----------------------------
INSERT INTO `students` VALUES (25, 'Alice', 20, 'F', '3');
INSERT INTO `students` VALUES (26, 'Bob', 21, 'M', '2');
INSERT INTO `students` VALUES (27, 'Charlie', 22, 'M', '4');
INSERT INTO `students` VALUES (28, 'Diana', 23, 'F', '1');
INSERT INTO `students` VALUES (29, 'Eve', 24, 'F', '3');
INSERT INTO `students` VALUES (30, 'Tom', 18, 'M', 'Freshman');
INSERT INTO `students` VALUES (31, 'Lucy', 19, 'F', 'Sophomore');
INSERT INTO `students` VALUES (32, 'Jack', 20, 'M', 'Junior');
INSERT INTO `students` VALUES (33, 'Jane', 21, 'F', 'Senior');
INSERT INTO `students` VALUES (34, 'Alice', 20, 'F', '1');
INSERT INTO `students` VALUES (35, 'Bob', 22, 'M', '2');
INSERT INTO `students` VALUES (36, 'Charlie', 21, 'M', '3');
INSERT INTO `students` VALUES (37, 'David', 23, 'M', '4');
INSERT INTO `students` VALUES (38, 'Eve', 19, 'F', '5');
INSERT INTO `students` VALUES (39, 'Frank', 21, 'M', '6');
INSERT INTO `students` VALUES (40, 'Grace', 20, 'F', '7');
INSERT INTO `students` VALUES (41, 'Henry', 22, 'M', '8');
INSERT INTO `students` VALUES (42, 'Iris', 21, 'F', '9');
INSERT INTO `students` VALUES (43, 'Jack', 19, 'M', '10');
INSERT INTO `students` VALUES (44, 'John Doe', 20, '男', 'A');
INSERT INTO `students` VALUES (45, 'John Doe', 20, '男', 'A');
