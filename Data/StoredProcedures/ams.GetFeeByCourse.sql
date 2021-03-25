CREATE
	OR


ALTER PROCEDURE ams.GetFeeByCourse @CourseID INT,
	@GradeId INT,
	@LevelId INT,
	@isAbroad BIT,
	@ClassCount INT
AS
BEGIN
	SELECT IIF(@isAbroad = 1, FeesAmount_NRI, FeesAmount_IND) AS Amount
	FROM ams.FeesStructure
	WHERE CourseID = @CourseID
		AND GradeId = @GradeId
		AND LevelId = @LevelId
		AND ClassCount = @ClassCount
END
