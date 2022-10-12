SELECT up.Id, up.[DisplayName], up.FirstName , up.LastName,  up.Email, up.CreateDateTime,  up.ImageLocation, up.UserTypeId, u.Name AS UserType
                        FROM UserProfile up
                        JOIN UserType u ON u.Id = up.UserTypeId
                        Order By up.DisplayName