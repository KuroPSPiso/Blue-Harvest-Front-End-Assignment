@echo on
CMD /C "npm run build"
rmdir "../docs" /s /q
mkdir "../docs"
xcopy "./dist" "../docs" /e /q
rmdir "./dist" /s /q